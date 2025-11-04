import { Injectable, effect, signal, computed } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export interface layoutConfig {
    preset?: string;
    primary?: string;
    surface?: string | undefined | null;
    darkTheme?: boolean;
    menuMode?: string;
}

interface LayoutState {
    staticMenuDesktopInactive?: boolean;
    overlayMenuActive?: boolean;
    configSidebarVisible?: boolean;
    staticMenuMobileActive?: boolean;
    menuHoverActive?: boolean;
}

interface MenuChangeEvent {
    key: string;
    routeEvent?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    _config: layoutConfig = {
        preset: 'Aura',
        primary: 'emerald',
        surface: null,
        darkTheme: false,
        menuMode: 'static'
    };

    _state: LayoutState = {
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    };

    layoutConfig = signal<layoutConfig>(this._config);

    layoutState = signal<LayoutState>(this._state);

    private configUpdate = new Subject<layoutConfig>();

    private overlayOpen = new Subject<any>();

    private menuSource = new Subject<MenuChangeEvent>();

    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();

    resetSource$ = this.resetSource.asObservable();

    configUpdate$ = this.configUpdate.asObservable();

    overlayOpen$ = this.overlayOpen.asObservable();

    theme = computed(() => (this.layoutConfig()?.darkTheme ? 'light' : 'dark'));

    isSidebarActive = computed(() => this.layoutState().overlayMenuActive || this.layoutState().staticMenuMobileActive);

    isDarkTheme = computed(() => this.layoutConfig().darkTheme);

    getPrimary = computed(() => this.layoutConfig().primary);

    getSurface = computed(() => this.layoutConfig().surface);

    isOverlay = computed(() => this.layoutConfig().menuMode === 'overlay');

    transitionComplete = signal<boolean>(false);

    private configChanges = new Subject<layoutConfig>();
    private isSaving = false;
    private initialized = false;

    constructor() {
        // Set up debounced auto-save (1 second delay)
        this.configChanges.pipe(
            debounceTime(1000)
        ).subscribe(config => {
            if (!this.isSaving) {
                this.saveConfigDebounced(config);
            }
        });

        effect(() => {
            const config = this.layoutConfig();
            //console.log('🔍 Config effect triggered:', config);
            
            if (config) {
                this.onConfigUpdate();
                
                // Send to debounced auto-save instead of immediate save
                if (this.initialized) {
                    this.configChanges.next(config);
                }
            }
        });

        effect(() => {
            const config = this.layoutConfig();
            if (!this.initialized || !config) {
                this.initialized = true;
                return;
            }
            this.handleDarkModeTransition(config);
        });

        // Load config on service initialization
        setTimeout(() => {
            this.loadConfig();
        }, 300);
    }

    private async saveConfigDebounced(config: layoutConfig): Promise<void> {
        try {
            this.isSaving = true;
            //console.log('💾 Debounced save triggered');
            await window.electronAPI.saveLayoutConfig(config);
            //console.log('✅ Config saved (debounced)');
        } catch (error) {
            //console.error('❌ Failed to save config:', error);
        } finally {
            this.isSaving = false;
        }
    }

    async loadConfig(): Promise<void> {
        try {
            // console.log('🔄 Attempting to load config...');
            const result = await window.electronAPI.loadLayoutConfig();
            // console.log('Load result:', result);
            
            if (result.success && result.config) {
                // console.log('✅ Config loaded from file:', result.config);
                
                // IMPORTANT: Apply the loaded config to both the signal AND the DOM
                this.layoutConfig.set(result.config);
                
                // Force apply the configuration to DOM
                this.applyConfigToDOM(result.config);
                
            } else if (result.success && result.config === null) {
                // console.log('ℹ️ No saved config found, using defaults');
                // Apply default config to DOM
                this.applyConfigToDOM(this.layoutConfig());
            }
        } catch (error) {
            // console.error('❌ Failed to load config:', error);
            // Apply default config to DOM as fallback
            this.applyConfigToDOM(this.layoutConfig());
        }
    }

    private applyConfigToDOM(config: layoutConfig): void {
        // console.log('🎨 Applying FULL config to DOM:', config);
        
        // Apply dark theme
        this.toggleDarkMode(config);
        
        // Apply color variables
        this.applyColorVariables(config);
        
        // console.log('✅ Config fully applied to DOM');
    }

    private applyColorVariables(config: layoutConfig): void {
        const root = document.documentElement;
        
        // Apply primary color
        if (config.primary) {
            const primaryColor = this.getColorValue(config.primary);
            root.style.setProperty('--primary-color', primaryColor);
            // console.log('🎨 Applied primary color:', config.primary, '->', primaryColor);
            
            // Also update any other related CSS variables
            root.style.setProperty('--primary-500', primaryColor);
            root.style.setProperty('--primary-600', this.darkenColor(primaryColor, 0.1));
        }
        
        // Apply surface color if specified
        if (config.surface) {
            const surfaceColor = this.getColorValue(config.surface);
            root.style.setProperty('--surface-color', surfaceColor);
            // console.log('🎨 Applied surface color:', config.surface, '->', surfaceColor);
        }
    }

    private getColorValue(colorName: string): string {
        const colorMap: { [key: string]: string } = {
            'emerald': '#10b981',
            'sky': '#0ea5e9',
            'blue': '#3b82f6',
            'red': '#ef4444',
            'amber': '#f59e0b',
            'indigo': '#6366f1',
            'purple': '#8b5cf6',
            'pink': '#ec4899',
            'gray': '#6b7280',
            'green': '#22c55e',
            'yellow': '#eab308',
            'orange': '#f97316',
            'cyan': '#06b6d4',
            'lime': '#84cc16',
            'fuchsia': '#d946ef',
            'rose': '#f43f5e',
            'violet': '#8b5cf6',
            'teal': '#14b8a6'
        };
        
        return colorMap[colorName] || colorName;
    }

    private darkenColor(color: string, amount: number): string {
        // Simple color darkening function
        if (color.startsWith('#')) {
            let r = parseInt(color.slice(1, 3), 16);
            let g = parseInt(color.slice(3, 5), 16);
            let b = parseInt(color.slice(5, 7), 16);
            
            r = Math.max(0, Math.min(255, Math.floor(r * (1 - amount))));
            g = Math.max(0, Math.min(255, Math.floor(g * (1 - amount))));
            b = Math.max(0, Math.min(255, Math.floor(b * (1 - amount))));
            
            return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        }
        return color;
    }

    private handleDarkModeTransition(config: layoutConfig): void {
        if ((document as any).startViewTransition) {
            this.startViewTransition(config);
        } else {
            this.toggleDarkMode(config);
            this.onTransitionEnd();
        }
    }

    private startViewTransition(config: layoutConfig): void {
        const transition = (document as any).startViewTransition(() => {
            this.toggleDarkMode(config);
        });

        transition.ready
            .then(() => {
                this.onTransitionEnd();
            })
            .catch(() => {});
    }

    toggleDarkMode(config?: layoutConfig): void {
        const _config = config || this.layoutConfig();
        
        if (_config.darkTheme) {
            document.documentElement.classList.add('app-dark');
            // console.log('🌙 Applied dark theme');
        } else {
            document.documentElement.classList.remove('app-dark');
            // console.log('☀️ Applied light theme');
        }
        
        // Also apply color variables
        this.applyColorVariables(_config);
    }

    private onTransitionEnd() {
        this.transitionComplete.set(true);
        setTimeout(() => {
            this.transitionComplete.set(false);
        });
    }

    onConfigUpdate() {
        this._config = { ...this.layoutConfig() };
        
        // Apply color changes immediately when config updates
        this.applyColorVariables(this._config);
        
        this.configUpdate.next(this.layoutConfig());
    }

    onMenuToggle() {
        if (this.isOverlay()) {
            this.layoutState.update((prev) => ({ ...prev, overlayMenuActive: !this.layoutState().overlayMenuActive }));

            if (this.layoutState().overlayMenuActive) {
                this.overlayOpen.next(null);
            }
        }

        if (this.isDesktop()) {
            this.layoutState.update((prev) => ({ ...prev, staticMenuDesktopInactive: !this.layoutState().staticMenuDesktopInactive }));
        } else {
            this.layoutState.update((prev) => ({ ...prev, staticMenuMobileActive: !this.layoutState().staticMenuMobileActive }));

            if (this.layoutState().staticMenuMobileActive) {
                this.overlayOpen.next(null);
            }
        }
    }

    isDesktop() {
        return window.innerWidth > 991;
    }

    isMobile() {
        return !this.isDesktop();
    }

    onMenuStateChange(event: MenuChangeEvent) {
        this.menuSource.next(event);
    }

    reset() {
        this.resetSource.next(true);
    }

    // Add this method for debugging
    debugColorApplication(): void {
        const config = this.layoutConfig();
        // console.log('🐛 Current config:', config);
        // console.log('🐛 DOM primary color:', getComputedStyle(document.documentElement).getPropertyValue('--primary-color'));
        // console.log('🐛 Has dark class:', document.documentElement.classList.contains('app-dark'));
        
        // Force re-apply
        this.applyConfigToDOM(config);
    }
}
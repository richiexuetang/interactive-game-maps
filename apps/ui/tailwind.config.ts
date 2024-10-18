import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
        "2xl": "1920px",
      },
      colors: {
        bodyBackground: "var(--body-background)",
        mapBackground: "var(--map-background)",
        // text: "var(--text-color)",
        // background: "var(--app-background)",
        foreground: "hsl(var(--foreground))",
        sidebarBackground: "var(--sidebar-background-color)",
        titleFont: "var(--title-font-color)",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: "var(--accent-color)",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        primary: {
          main: "var(--ritcher-palette-primary-main)",
          DEFAULT: "rgb(var(--ritcher-palette-primary-mainChannel))",
          light: "rgb(var(--ritcher-palette-primary-lightChannel))",
          dark: "rgb(var(--ritcher-palette-primary-darkChannel))",
          contrastText:
            "rgb(var(--ritcher-palette-primary-contrastTextChannel))",
        },
        secondary: {
          main: "var(--ritcher-palette-secondary-main)",
          DEFAULT: "rgb(var(--ritcher-palette-secondary-mainChannel))",
          light: "rgb(var(--ritcher-palette-secondary-lightChannel))",
          dark: "rgb(var(--ritcher-palette-secondary-darkChannel))",
          contrastText:
            "rgb(var(--ritcher-palette-secondary-contrastTextChannel))",
        },
        info: {
          DEFAULT: "rgb(var(--ritcher-palette-info-mainChannel))",
          light: "rgb(var(--ritcher-palette-info-lightChannel))",
          dark: "rgb(var(--ritcher-palette-info-darkChannel))",
          contrastText: "rgb(var(--ritcher-palette-info-contrastTextChannel))",
        },
        error: {
          DEFAULT: "rgb(var(--ritcher-palette-error-mainChannel))",
          light: "rgb(var(--ritcher-palette-error-lightChannel))",
          dark: "rgb(var(--ritcher-palette-error-darkChannel))",
          contrastText: "rgb(var(--ritcher-palette-error-contrastTextChannel))",
        },
        success: {
          DEFAULT: "rgb(var(--ritcher-palette-success-mainChannel))",
          light: "rgb(var(--ritcher-palette-success-lightChannel))",
          dark: "rgb(var(--ritcher-palette-success-darkChannel))",
          contrastText:
            "rgb(var(--ritcher-palette-success-contrastTextChannel))",
        },
        warning: {
          DEFAULT: "rgb(var(--ritcher-palette-warning-mainChannel))",
          light: "rgb(var(--ritcher-palette-warning-lightChannel))",
          dark: "rgb(var(--ritcher-palette-warning-darkChannel))",
          contrastText:
            "rgb(var(--ritcher-palette-warning-contrastTextChannel))",
        },
        text: {
          primary: "var(--ritcher-palette-text-primary)",
          secondary: "var(--ritcher-palette-text-secondary)",
          disabled: "var(--ritcher-palette-text-disabled)",
        },
        common: {
          background: "var(--ritcher-palette-common-background)",
          onBackground: "var(--ritcher-palette-common-onBackground)",
        },
        gray: {
          50: "var(--ritcher-palette-grey-50)",
          100: "var(--ritcher-palette-grey-100)",
          200: "var(--ritcher-palette-grey-200)",
          300: "var(--ritcher-palette-grey-300)",
          400: "var(--ritcher-palette-grey-400)",
          500: "var(--ritcher-palette-grey-500)",
          600: "var(--ritcher-palette-grey-600)",
          700: "var(--ritcher-palette-grey-700)",
          800: "var(--ritcher-palette-grey-800)",
          900: "var(--ritcher-palette-grey-900)",
          A100: "var(--ritcher-palette-grey-A100)",
          A200: "var(--ritcher-palette-grey-A200)",
          A400: "var(--ritcher-palette-grey-A400)",
          A700: "var(--ritcher-palette-grey-A700)",
        },
        divider: "var(--ritcher-palette-divider)",
        background: {
          default: "var(--ritcher-palette-background-default)",
          paper: "var(--ritcher-palette-background-paper)",
        },
        action: {
          active: "var(--ritcher-palette-action-active)",
          hover: "var(--ritcher-palette-action-hover)",
          selected: "var(--ritcher-palette-action-selected)",
          disabled: "var(--ritcher-palette-action-disabled)",
          focus: "var(--ritcher-palette-action-focus)",
        },
        Alert: {
          errorColor: "var(--ritcher-palette-Alert-errorColor)",
          infoColor: "var(--ritcher-palette-Alert-infoColor)",
          successColor: "var(--ritcher-palette-Alert-successColor)",
          warningColor: "var(--ritcher-palette-Alert-warningColor)",
          errorFilledBg: "var(--ritcher-palette-Alert-errorFilledBg)",
          infoFilledBg: "var(--ritcher-palette-Alert-infoFilledBg)",
          successFilledBg: "var(--ritcher-palette-Alert-successFilledBg)",
          warningFilledBg: "var(--ritcher-palette-Alert-warningFilledBg)",
          errorFilledColor: "var(--ritcher-palette-Alert-errorFilledColor)",
          infoFilledColor: "var(--ritcher-palette-Alert-infoFilledColor)",
          successFilledColor: "var(--ritcher-palette-Alert-successFilledColor)",
          warningFilledColor: "var(--ritcher-palette-Alert-warningFilledColor)",
          errorStandardBg: "var(--ritcher-palette-Alert-errorStandardBg)",
          infoStandardBg: "var(--ritcher-palette-Alert-infoStandardBg)",
          successStandardBg: "var(--ritcher-palette-Alert-successStandardBg)",
          warningStandardBg: "var(--ritcher-palette-Alert-warningStandardBg)",
          errorIconColor: "var(--ritcher-palette-Alert-errorIconColor)",
          infoIconColor: "var(--ritcher-palette-Alert-infoIconColor)",
          successIconColor: "var(--ritcher-palette-Alert-successIconColor)",
          warningIconColor: "var(--ritcher-palette-Alert-warningIconColor)",
        },
        AppBar: {
          defaultBg: "var(--ritcher-palette-AppBar-defaultBg)",
        },
        Avatar: {
          defaultBg: "var(--ritcher-palette-Avatar-defaultBg)",
        },
        Button: {
          inheritContainedBg:
            "var(--ritcher-palette-Button-inheritContainedBg)",
          inheritContainedHoverBg:
            "var(--ritcher-palette-Button-inheritContainedHoverBg)",
        },
        Chip: {
          defaultBorder: "var(--ritcher-palette-Chip-defaultBorder)",
          defaultAvatarColor: "var(--ritcher-palette-Chip-defaultAvatarColor)",
          defaultIconColor: "var(--ritcher-palette-Chip-defaultIconColor)",
        },
        FilledInput: {
          bg: "var(--ritcher-palette-FilledInput-bg)",
          hoverBg: "var(--ritcher-palette-FilledInput-hoverBg)",
          disabledBg: "var(--ritcher-palette-FilledInput-disabledBg)",
        },
        LinearProgress: {
          primaryBg: "var(--ritcher-palette-LinearProgress-primaryBg)",
          secondaryBg: "var(--ritcher-palette-LinearProgress-secondaryBg)",
          errorBg: "var(--ritcher-palette-LinearProgress-errorBg)",
          infoBg: "var(--ritcher-palette-LinearProgress-infoBg)",
          successBg: "var(--ritcher-palette-LinearProgress-successBg)",
          warningBg: "var(--ritcher-palette-LinearProgress-warningBg)",
        },
        Skeleton: {
          bg: "var(--ritcher-palette-Skeleton-bg)",
        },
        Slider: {
          primaryTrack: "var(--ritcher-palette-Slider-primaryTrack)",
          secondaryTrack: "var(--ritcher-palette-Slider-secondaryTrack)",
          errorTrack: "var(--ritcher-palette-Slider-errorTrack)",
          infoTrack: "var(--ritcher-palette-Slider-infoTrack)",
          successTrack: "var(--ritcher-palette-Slider-successTrack)",
          warningTrack: "var(--ritcher-palette-Slider-warningTrack)",
        },
        SnackbarContent: {
          bg: "var(--ritcher-palette-SnackbarContent-bg)",
          color: "var(--ritcher-palette-SnackbarContent-color)",
        },
        SpeedDialAction: {
          fabHoverBg: "var(--ritcher-palette-SpeedDialAction-fabHoverBg)",
        },
        StepConnector: {
          border: "var(--ritcher-palette-StepConnector-border)",
        },
        StepContent: {
          border: "var(--ritcher-palette-StepContent-border)",
        },
        Switch: {
          defaultColor: "var(--ritcher-palette-Switch-defaultColor)",
          defaultDisabledColor:
            "var(--ritcher-palette-Switch-defaultDisabledColor)",
          primaryDisabledColor:
            "var(--ritcher-palette-Switch-primaryDisabledColor)",
          secondaryDisabledColor:
            "var(--ritcher-palette-Switch-secondaryDisabledColor)",
          errorDisabledColor:
            "var(--ritcher-palette-Switch-errorDisabledColor)",
          infoDisabledColor: "var(--ritcher-palette-Switch-infoDisabledColor)",
          successDisabledColor:
            "var(--ritcher-palette-Switch-successDisabledColor)",
          warningDisabledColor:
            "var(--ritcher-palette-Switch-warningDisabledColor)",
        },
        TableCell: {
          border: "var(--ritcher-palette-TableCell-border)",
        },
        Tooltip: {
          bg: "var(--ritcher-palette-Tooltip-bg)",
        },
      },
      fontFamily: {
        body: "var(--body-font-family)",
        text: "var(--text-font-family)",
      },
      borderRadius: {
        sm: "calc(var(--ritcher-shape-borderRadius) / 2)",
        DEFAULT: "var(--ritcher-shape-borderRadius)",
        lg: "calc(var(--ritcher-shape-borderRadius) * 2)",
      },
      boxShadow: {
        1: "var(--ritcher-shadows-1)",
        2: "var(--ritcher-shadows-2)",
        3: "var(--ritcher-shadows-3)",
        4: "var(--ritcher-shadows-4)",
        5: "var(--ritcher-shadows-5)",
        6: "var(--ritcher-shadows-6)",
        7: "var(--ritcher-shadows-7)",
        8: "var(--ritcher-shadows-8)",
        9: "var(--ritcher-shadows-9)",
        10: "var(--ritcher-shadows-10)",
        11: "var(--ritcher-shadows-11)",
        12: "var(--ritcher-shadows-12)",
        13: "var(--ritcher-shadows-13)",
        14: "var(--ritcher-shadows-14)",
        15: "var(--ritcher-shadows-15)",
        16: "var(--ritcher-shadows-16)",
        17: "var(--ritcher-shadows-17)",
        18: "var(--ritcher-shadows-18)",
        19: "var(--ritcher-shadows-19)",
        20: "var(--ritcher-shadows-20)",
        21: "var(--ritcher-shadows-21)",
        22: "var(--ritcher-shadows-22)",
        23: "var(--ritcher-shadows-23)",
        24: "var(--ritcher-shadows-24)",
      },
      opacity: {
        activated: "var(--ritcher-palette-action-activatedOpacity)",
        disabled: "var(--ritcher-palette-action-disabledOpacity)",
        focus: "var(--ritcher-palette-action-focusOpacity)",
        hover: "var(--ritcher-palette-action-hoverOpacity)",
        selected: "var(--ritcher-palette-action-selectedOpacity)",
      },
    },
  },
  darkMode: ["class"],
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        h1: { font: "var(--ritcher-font-h1)", letterSpacing: "-0.01562em" },
        h2: { font: "var(--ritcher-font-h2)", letterSpacing: "-0.00833em" },
        h3: {
          font: "var(--ritcher-font-h3)",
          color: "var(--ritcher-palette-text-primary)",
        },
        h4: { font: "var(--ritcher-font-h4)", letterSpacing: "0.00735em" },
        h5: { font: "var(--ritcher-font-h5)" },
        h6: {
          font: "var(--ritcher-font-h6)",
          letterSpacing: "0.0075em",
        },
        p: {
          font: "var(--ritcher-font-body1) !important",
          letterSpacing: "0.00938em",
          color: "var(--ritcher-palette-text-primary)",
          fontFamily: "var(--body-font-family)",
        },
        span: {
          font: "var(--ritcher-font-body2)",
          letterSpacing: "0.01071em",
          fontFamily: "var(--body-font-family)",
        },
      });
      addUtilities({
        ".typography-h1": { font: "var(--ritcher-font-h1)" },
        ".typography-h2": { font: "var(--ritcher-font-h2)" },
        ".typography-h3": { font: "var(--ritcher-font-h3)" },
        ".typography-h4": { font: "var(--ritcher-font-h4)" },
        ".typography-h5": { font: "var(--ritcher-font-h5)" },
        ".typography-h6": { font: "var(--ritcher-font-h6)" },
        ".typography-subtitle1": { font: "var(--ritcher-font-subtitle1)" },
        ".typography-subtitle2": { font: "var(--ritcher-font-subtitle2)" },
        ".typography-body1": { font: "var(--ritcher-font-body1)" },
        ".typography-body2": { font: "var(--ritcher-font-body2)" },
        ".typography-button": { font: "var(--ritcher-font-button)" },
        ".typography-caption": { font: "var(--ritcher-font-caption)" },
        ".typography-overline": { font: "var(--ritcher-font-overline)" },
        ".overlay-1": { backgroundImage: "var(--ritcher-overlays-1)" },
        ".overlay-2": { backgroundImage: "var(--ritcher-overlays-2)" },
        ".overlay-3": { backgroundImage: "var(--ritcher-overlays-3)" },
        ".overlay-4": { backgroundImage: "var(--ritcher-overlays-4)" },
        ".overlay-5": { backgroundImage: "var(--ritcher-overlays-5)" },
        ".overlay-6": { backgroundImage: "var(--ritcher-overlays-6)" },
        ".overlay-7": { backgroundImage: "var(--ritcher-overlays-7)" },
        ".overlay-8": { backgroundImage: "var(--ritcher-overlays-8)" },
        ".overlay-9": { backgroundImage: "var(--ritcher-overlays-9)" },
        ".overlay-10": { backgroundImage: "var(--ritcher-overlays-10)" },
        ".overlay-11": { backgroundImage: "var(--ritcher-overlays-11)" },
        ".overlay-12": { backgroundImage: "var(--ritcher-overlays-12)" },
        ".overlay-13": { backgroundImage: "var(--ritcher-overlays-13)" },
        ".overlay-14": { backgroundImage: "var(--ritcher-overlays-14)" },
        ".overlay-15": { backgroundImage: "var(--ritcher-overlays-15)" },
        ".overlay-16": { backgroundImage: "var(--ritcher-overlays-16)" },
        ".overlay-17": { backgroundImage: "var(--ritcher-overlays-17)" },
        ".overlay-18": { backgroundImage: "var(--ritcher-overlays-18)" },
        ".overlay-19": { backgroundImage: "var(--ritcher-overlays-19)" },
        ".overlay-20": { backgroundImage: "var(--ritcher-overlays-20)" },
        ".overlay-21": { backgroundImage: "var(--ritcher-overlays-21)" },
        ".overlay-22": { backgroundImage: "var(--ritcher-overlays-22)" },
        ".overlay-23": { backgroundImage: "var(--ritcher-overlays-23)" },
        ".overlay-24": { backgroundImage: "var(--ritcher-overlays-24)" },
        ".elevation-1": {
          backgroundImage: "var(--ritcher-overlays-1)",
          boxShadow: "var(--ritcher-shadows-1)",
        },
        ".elevation-2": {
          backgroundImage: "var(--ritcher-overlays-2)",
          boxShadow: "var(--ritcher-shadows-2)",
        },
        ".elevation-3": {
          backgroundImage: "var(--ritcher-overlays-3)",
          boxShadow: "var(--ritcher-shadows-3)",
        },
        ".elevation-4": {
          backgroundImage: "var(--ritcher-overlays-4)",
          boxShadow: "var(--ritcher-shadows-4)",
        },
        ".elevation-5": {
          backgroundImage: "var(--ritcher-overlays-5)",
          boxShadow: "var(--ritcher-shadows-5)",
        },
        ".elevation-6": {
          backgroundImage: "var(--ritcher-overlays-6)",
          boxShadow: "var(--ritcher-shadows-6)",
        },
        ".elevation-7": {
          backgroundImage: "var(--ritcher-overlays-7)",
          boxShadow: "var(--ritcher-shadows-7)",
        },
        ".elevation-8": {
          backgroundImage: "var(--ritcher-overlays-8)",
          boxShadow: "var(--ritcher-shadows-8)",
        },
        ".elevation-9": {
          backgroundImage: "var(--ritcher-overlays-9)",
          boxShadow: "var(--ritcher-shadows-9)",
        },
        ".elevation-10": {
          backgroundImage: "var(--ritcher-overlays-10)",
          boxShadow: "var(--ritcher-shadows-10)",
        },
        ".elevation-11": {
          backgroundImage: "var(--ritcher-overlays-11)",
          boxShadow: "var(--ritcher-shadows-11)",
        },
        ".elevation-12": {
          backgroundImage: "var(--ritcher-overlays-12)",
          boxShadow: "var(--ritcher-shadows-12)",
        },
        ".elevation-13": {
          backgroundImage: "var(--ritcher-overlays-13)",
          boxShadow: "var(--ritcher-shadows-13)",
        },
        ".elevation-14": {
          backgroundImage: "var(--ritcher-overlays-14)",
          boxShadow: "var(--ritcher-shadows-14)",
        },
        ".elevation-15": {
          backgroundImage: "var(--ritcher-overlays-15)",
          boxShadow: "var(--ritcher-shadows-15)",
        },
        ".elevation-16": {
          backgroundImage: "var(--ritcher-overlays-16)",
          boxShadow: "var(--ritcher-shadows-16)",
        },
        ".elevation-17": {
          backgroundImage: "var(--ritcher-overlays-17)",
          boxShadow: "var(--ritcher-shadows-17)",
        },
        ".elevation-18": {
          backgroundImage: "var(--ritcher-overlays-18)",
          boxShadow: "var(--ritcher-shadows-18)",
        },
        ".elevation-19": {
          backgroundImage: "var(--ritcher-overlays-19)",
          boxShadow: "var(--ritcher-shadows-19)",
        },
        ".elevation-20": {
          backgroundImage: "var(--ritcher-overlays-20)",
          boxShadow: "var(--ritcher-shadows-20)",
        },
        ".elevation-21": {
          backgroundImage: "var(--ritcher-overlays-21)",
          boxShadow: "var(--ritcher-shadows-21)",
        },
        ".elevation-22": {
          backgroundImage: "var(--ritcher-overlays-22)",
          boxShadow: "var(--ritcher-shadows-22)",
        },
        ".elevation-23": {
          backgroundImage: "var(--ritcher-overlays-23)",
          boxShadow: "var(--ritcher-shadows-23)",
        },
        ".elevation-24": {
          backgroundImage: "var(--ritcher-overlays-24)",
          boxShadow: "var(--ritcher-shadows-24)",
        },
      });
    }),
  ],
};

export default config;

import { ThemeColors } from '../Colors/index';
import {
    DimensionValue,
    FlexStyle,
    StyleSheet,
    TextStyle,
    ViewStyle,
} from 'react-native';

/**
 * Color options that the theme support
 */
type Color = 'backgroundColor' | 'color' | 'borderColor';
/**
 * Padding options that the theme support
 */
export type Padding =
    | 'padding'
    | 'paddingHorizontal'
    | 'paddingBottom'
    | 'paddingTop'
    | 'paddingVertical'
    | 'paddingLeft'
    | 'paddingRight';
/**
 * Sizes options that the theme support
 */
export type Sizes =
    | 'xs'
    | 'sm'
    | 'md'
    | 'normal'
    | 'extra'
    | 'default'
    | 'xl'
    | '1xl'
    | '2xl';

export type RadiusTypes =
    | 'borderRadius'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
    | 'borderBottomLeftRadius'
    | 'borderBottomRightRadius';

export type MarginTypes =
    | 'margin'
    | 'marginBottom'
    | 'marginEnd'
    | 'marginHorizontal'
    | 'marginLeft'
    | 'marginRight'
    | 'marginStart'
    | 'marginTop'
    | 'marginVertical';

export type BorderWidth =
    | 'border'
    | 'borderTop'
    | 'borderBottom'
    | 'borderLeft'
    | 'borderRight';
/**
 * Sizes for the theme
 */
export const sizes = {
    xs: 4,
    sm: 8,
    md: 12,
    normal: 16,
    extra: 20,
    default: 24,
    xl: 32,
    '1xl': 44,
    '2xl': 48,
    '3xl': 54,
};

// add color
export function addColor(color: string, type: Color = 'backgroundColor') {
    return {
        [type]: color,
    };
}

/**
 * Create Circle - small function to create a perfect circle
 * @param number size
 */
export function createCircle(size: number) {
    return {
        width: size,
        height: size,
        borderRadius: size / 2,
    };
}

/**
 * Small function to add padding to a component or element
 * @param size one of {Sizes}
 * @param type one of {Padding}
 * @param size manual option to add padding
 */
export function addPadding(
    elementSize: Sizes,
    type: Padding = 'padding',
    size?: number,
) {
    return {
        [type]: size || sizes[elementSize],
    };
}

/**
 * Util to add border radius to an element
 * @param size
 */
export function addBorderRadius(type: Sizes, size?: number) {
    return {
        borderRadius: size || sizes[type],
    };
}

export function addWidth(width: DimensionValue) {
    return {
        width,
    };
}

/**
 * Styles for flex orientation
 */
export const orientation = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    spread: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    evenly: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    allCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    alignCenter: {
        alignItems: 'center',
    },
    alignTop: {
        alignItems: 'flex-start',
    },
    self: {
        alignSelf: 'flex-start',
    },
    endRow: {
        justifyContent: 'flex-end',
    },
    full: {
        flex: 1,
    },
    disableGrow: {
        flexGrow: 0,
    },
});

/**
 * Util to add a font size
 * @param type one of {Sizes}
 * @param size manual size
 */
export function fontSize(size: Sizes | number) {
    return {
        fontSize: typeof size === 'number' ? size : sizes[size],
    };
}

/**
 * utils to add font weight
 * @param fontWeight
 */
export function addFontWeight(fontWeight: TextStyle['fontWeight']) {
    return {
        fontWeight,
    };
}

export function addDirection(flexDirection: FlexStyle['flexDirection']) {
    return {
        flexDirection,
    };
}

export function addJustifyContent(justifyContent: FlexStyle['justifyContent']) {
    return {
        justifyContent,
    };
}

export function addAlignItems(alignItems: FlexStyle['alignItems']) {
    return {
        alignItems,
    };
}

export function addFlex(flex: FlexStyle['flex']) {
    return {
        flex,
    };
}

export function addTextAlign(textAlign: TextStyle['textAlign']) {
    return {
        textAlign,
    };
}

export function addOpacity(opacity: ViewStyle['opacity']) {
    return {
        opacity,
    };
}

export function addPosition(position: FlexStyle['position']) {
    return {
        position,
    };
}

export function addTextTransform(textTransform: TextStyle['textTransform']) {
    return {
        textTransform,
    };
}

export function addRadius(type: RadiusTypes, radius: Sizes, size?: number) {
    return {
        [type]: size || sizes[radius],
    };
}

export function wrapText(
    flexWrap: FlexStyle['flexWrap'] = 'wrap',
    flexShrink: FlexStyle['flexShrink'] = 1,
) {
    return {
        ...addFlex(1),
        flexWrap,
        flexShrink,
    };
}

export function addMargin(type: MarginTypes, margin: Sizes, size?: number) {
    return {
        [type]: sizes[margin] || size,
    };
}

export function addBorder(
    size: number,
    type: BorderWidth = 'border',
    color: string = ThemeColors.text,
) {
    const borderType = `${type}Width`;
    const borderColor = `${type}Color`;

    return StyleSheet.create({
        sm: {
            [borderType]: size,
            [borderColor]: color,
        },
    }).sm;
}

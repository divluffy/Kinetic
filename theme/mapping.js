import { colors } from 'design';

export default {
  strict: {
    OpenSans_400Regular: 'OpenSans_400Regular',
    RobotoSlab_500Medium: 'RobotoSlab_500Medium',
    RobotoSlab_600SemiBold: 'RobotoSlab_600SemiBold',
    RobotoSlab_700Bold: 'RobotoSlab_700Bold',
    Roboto_400Regular: 'Roboto_400Regular',
    'text-font-family': 'OpenSans_600SemiBold',

    'text-heading-1-font-size': 64,
    'text-heading-1-font-family': '$RobotoSlab_600SemiBold',

    'text-heading-2-font-size': 32,
    'text-heading-2-font-family': '$text-font-family',

    'text-heading-3-font-size': 30,
    'text-heading-3-font-family': '$text-font-family',

    'text-heading-4-font-size': 26,
    'text-heading-4-font-family': '$RobotoSlab_700Bold',

    'text-heading-5-font-size': 24,
    'text-heading-5-font-family': '$Roboto_400Regular',

    'text-heading-6-font-size': 18,
    'text-heading-6-font-family': '$text-font-family',

    'text-subtitle-1-font-size': 17,
    'text-subtitle-1-font-family': '$text-font-family',
    'text-subtitle-2-font-size': 13,
    'text-subtitle-2-font-family': '$OpenSans_400Regular',

    'text-paragraph-1-font-size': 14,
    'text-paragraph-1-font-family': '$text-font-family',
    'text-paragraph-2-font-size': 12,
    'text-paragraph-2-font-family': '$OpenSans_400Regular',

    'text-caption-1-font-size': 14,
    'text-caption-1-font-family': '$RobotoSlab_500Medium',
    'text-caption-2-font-size': 12,
    'text-caption-2-font-family': '$text-font-family',

    'text-label-font-size': 15,
    'text-label-font-family': '$Roboto_400Regular',

    'size-tiny': 24,
    'size-small': 32,
    'size-medium': 40,
    'size-large': 48,
    'size-giant': 56,

    'size-small-w': 83,
    'size-small-h': 32,

    'border-radius': 4,
    'border-radius-card': 8,

    'border-color-card': colors.borderCard,
    'border-width': 1,
  },

  components: {
    Button: {
      appearances: {
        filled: {
          mapping: {
            textFontFamily: 'text-font-family',
          },
          variantGroups: {
            status: {
              primary: {
                textFontFamily: 'text-font-family',
              },
            },
            size: {
              small: {
                minWidth: 'size-small-w',
                minHeight: 'size-small-h',
                borderRadius: 'border-radius',
                borderWidth: 0,
                paddingHorizontal: 0,
                paddingVertical: 0,
                textMarginHorizontal: 0,
                // textFontSize: 12,
                // textFontWeight: 'bold',
                // iconWidth: 16,
                // iconHeight: 16,
                // iconMarginHorizontal: 8,
              },
            },
          },
        },

        variantGroups: {
          status: {
            basic: {},
          },
        },
      },
    },

    Card: {
      appearances: {
        outline: {
          mapping: {
            bodyPaddingHorizontal: 0,
            bodyPaddingVertical: 0,
            borderColor: 'border-color-card',
            borderRadius: 'border-radius-card',
          },
        },
      },
    },
  },
};

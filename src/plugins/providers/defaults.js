
const base = {
  VAppBar: {
    color: "",
    flat: true,

    VBtn: {
      class: "text-none elevation-0 font-weight-regular",
    },
  },

  VAutocomplete: {
    variant: "outlined",
    density: "comfortable",
  },

  VDialog: {
    width: 500,
    contentClass: "elevation-0",
    hideOverlay: true,
    // Cards inside dialogs are rounded xl, not lg and has no elevation
    VCard: {
      class: "bg-white rounded-xl elevation-0",
    },
  },

  VCard: {
    color: "transparent",
    elevation: 0,
  },

  VMenu: {
    VBtn: {
      class: "text-none elevation-0",
    },
  },

  VTextField: {
    variant: "outlined",
    density: "comfortable",
  },
  VCarousel: {
    VBtn: {
      color: "transparent",
    },
  }
};

export { base };
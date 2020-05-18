export default {
  data () {
    return {
      breakpointInitialized: false
    }
  },

  computed: {
    breakpoint () {
      const { $vuetify, breakpointInitialized } = this
      if (!breakpointInitialized) {
        return {}
      }
      return ($vuetify && $vuetify.breakpoint) || {}
    }
  },

  mounted () {
    this.initBreakpoint()
  },

  methods: {
    initBreakpoint () {
      this.breakpointInitialized = true
    }
  }
}

  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 2000,
      delay: 500
    }).start()
  }
  
  render() {
    const { navigate } = this.props.navigation;  
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['#e15d64', '#fff']
    })
    const animatedStyle = {
      backgroundColor: interpolateColor,
      /*transform: [{ translateY: this.animatedValue }]*/
    }
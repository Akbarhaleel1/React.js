const withExtraInfo = (Component) => {
    return (props) => {
      // Suppose you want to add some extra information as a prop
      const extraInfo = "This is extra info";
      return <Component {...props} extraInfo={extraInfo} />;
    }
  }
  
  const EnhancedComponent = withExtraInfo(MyComponent);
  
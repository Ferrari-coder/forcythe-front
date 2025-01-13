export const textVariant = (delay: any) => {
  //This function defines an animation variant for text elements.
  return {
    hidden: {
      //The "hidden" state specifies that the element should be initially hidden by moving up by 50 units and having 0 opacity.
      y: -50,
      opacity: 0,
    },
    show: {
      //The "show" state specifies that the element should move down to its normal position (y: 0) and become fully visible (opacity: 1) with a spring animation.
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay, //The delay parameter allows you to specify a delay before the animation starts.
      },
    },
  };
};

export const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
  //This function defines a fade-in animation variant.
  return {
    hidden: {
      //The "hidden" state specifies that the element should be initially positioned off-screen (x or y depending on the direction parameter) with 0 opacity.
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0, //The direction parameter determines whether the element enters from the left, right, up, or down.
      opacity: 0,
    },
    show: {
      //The "show" state specifies that the element should move to its normal position (x: 0, y: 0) and become fully visible (opacity: 1) with a specified animation type, delay, and duration.
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration, //The type, delay, and duration parameters allow you to customize the animation.
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: string, duration: string) => {
  //This function defines a zoom-in animation variant.
  return {
    hidden: {
      //The "hidden" state specifies that the element should start at a scale of 0 and 0 opacity.
      scale: 0,
      opacity: 0,
    },
    show: {
      //The "show" state specifies that the element should scale up to its normal size (scale: 1) and become fully visible (opacity: 1) with a specified delay and duration.
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction: string, type: string, delay: number, duration: number) => {
  //This function defines a sliding animation variant.
  return {
    hidden: {
      //The "hidden" state specifies that the element should start off-screen (x or y depending on the direction parameter).
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      //The "show" state specifies that the element should slide in from off-screen to its normal position with a specified animation type, delay, and duration.
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren: any, delayChildren: any) => {
  //This function defines a container animation variant that can be used to stagger the animations of its children.
  return {
    hidden: {},
    show: {
      transition: {
        //The "show" state specifies that its children should be staggered with a specified delay between each child's animation (staggerChildren) and an optional delay for all children (delayChildren).
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

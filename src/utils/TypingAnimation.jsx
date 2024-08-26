import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

import cn from "classnames";

const TypingAnimation = ({ text, duration = 200, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);
  
    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text]);

  return (
    <Typography variant="h1"
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText ? displayedText : text}
    </Typography>
  );
}

TypingAnimation.propTypes = {
    text: PropTypes.string.isRequired,
    duration: PropTypes.number,
    className: PropTypes.string,
};

export default TypingAnimation;
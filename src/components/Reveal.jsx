import PropTypes from "prop-types";
import { motion  } from "framer-motion";


const Reveal = ({
  children,
  duration = 0.5,
  delay = 0.15,
  component = "section",
}) => {
  const MotionComponent = motion[component];

  return (
    <MotionComponent
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0, 
        transition: {
          duration: duration,
          delay:delay
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </MotionComponent>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
  component: PropTypes.string,
};

export default Reveal;

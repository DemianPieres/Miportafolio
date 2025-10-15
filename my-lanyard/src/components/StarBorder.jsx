import './StarBorder.css';

const StarBorder = ({
  as: Component = 'div',
  className = '',
  innerClassName = '',
  color = '#9333EA',
  speed = '3s',
  thickness = 1,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        color: color,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          animationDuration: speed
        }}
      ></div>
      <div className={`inner-content ${innerClassName}`}>{children}</div>
    </Component>
  );
};

export default StarBorder;

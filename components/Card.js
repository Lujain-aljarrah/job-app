const Card = ({ title, content, footer, horizontal }) => {
    return (
      <div className={`card ${horizontal ? 'horizontal' : ''}`}>
        <div className="card-header">
          <h2>{title}</h2>
        </div>
        <div className="card-content">
          {content}
        </div>
        {footer && (
          <div className="card-footer">
            {footer}
          </div>
        )}
      </div>
    );
  };
  
  export default Card;
  
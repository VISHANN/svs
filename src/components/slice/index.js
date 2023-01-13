export default function Slice(props) {
  return(
    <section className="slice">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <img src={props.img.src} />
          </div>
          <div className="col-12 col-lg-8">
            <h2 className='h2'>
              {props.heading}
              <div className="subhead">
                {props.subheading}
              </div>
            </h2>
            <p className="lead">
              {props.lead}
            </p>
            <p>
              {props.children}
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .subhead {
          font-size: 1rem;
          padding-top: 0.5rem;
          font-weight: 400;
        }
      `} </style>
    </section>
  );
}
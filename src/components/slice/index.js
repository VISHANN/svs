export default function Slice(props) {
  return(
    <div className="slice">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <img src={props.img.src} />
            </div>
            <div className="col-12 col-lg-8">
              <h2 className='h2'>
                {props.head}
              </h2>
              <p className="lead">
                {props.lead}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
import image from '../assets/blank_image.jpg'
export default function Subpart({ title, description, src, url }) {
    return (
        <div className="container">
            <div className="card bg-dark text-light mb-3 mx-3 mt-3 px-2 py-2">
            <div className="row g-0">
                <div className="col-5 col-sm-4">
                    <img src={src?src:image} className="img-fluid" style={{ height: "200px", width: "325px" }} />
                </div>
                <div className="col-7 col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description ? description.slice(0, 90) : " "}</p>
                        <a href={url} className="btn btn-primary position-absolute bottom-0 end-0 my-2 mx-2">Read more...</a>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}
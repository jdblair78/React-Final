const Modal = () => {
const [ movie, setMovie] = useState()
  async function fetchMovies() {
    const { data } = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=c11d0770",
    );
    console.log(data)
    setMovie(data)
  }

  useEffect(() => {
    fetchMovies()
  }, []);

  return (
    <>
      <div className="modal">
        <div className="container">
          <div className="row">
            <img src="#" className="modal__img" alt="movie.title"></img>
            <div className="modal__details--wrapper">
              <div className="modal__details--left">
                <h1>Movie Title</h1>
                <p>Movie Released</p>
                <p>Movie Runtime</p>
                <p>Movie Ratings[1]</p>
                <p>Movie Plot</p>
              </div>
              <div className="modal__details--right">
                <p>Actors</p>
                <p>Genre</p>
                <p>Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

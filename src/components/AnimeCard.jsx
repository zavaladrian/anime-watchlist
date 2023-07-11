function AnimeCard(props) {
    return (
      <div className="container py-12">
        <table className=" table-auto">
          <thead>
            <th className="border border-slate-500">{props.anime.name}</th>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300">{props.anime.poster}
              </td>
            </tr>
            <tr>
              <td className=" border border-slate-300">{props.anime.category}</td>
            </tr>
            <tr>
              <td className=" border border-slate-300 ">{props.anime.rating}</td>
            </tr>
            <tr>
              <td className=" border border-slate-300 ">
                {props.anime.publisher}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default AnimeCard;
  
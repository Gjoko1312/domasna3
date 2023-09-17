import "./comments.css"
export function Comments(props) {
    console.log(props);
  
    function onLikeClick() {
      console.log("+1");
    }
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID на објавата</th>
              <th>Автор на објавата</th>
              <th>Текст</th>
              <th>Лајкови</th>
            </tr>
          </thead>
          <tbody>
            {props.comments.map((comment, index) => (
              <tr key={index}>
                <td>{comment.postId}</td>
                <td>{comment.author}</td>
                <td>{comment.text}</td>
                <td>
                  <button onClick={onLikeClick}>ЛАЈК</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
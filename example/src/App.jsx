import "./App.css";
import { Link } from "react-router";
function App() {
  return (
    <div>
      <Link to="/signup">회원가입</Link>
      <Link to="/login">로그인</Link> {/* a href 태그 대신 사용 */}
    </div>
  );
}

export default App;

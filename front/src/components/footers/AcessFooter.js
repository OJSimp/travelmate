import "./AccessFooter.scss";

import { Link } from "react-router-dom";

function AccessFooter() {
  return (
    <div className="footer--access">
      <Link>Privacy policy</Link> <span>|</span> <Link>Terms of use</Link>
    </div>
  );
}

export default AccessFooter;

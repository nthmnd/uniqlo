import Link from "next/link";
import { useRouter, withRouter } from "next/router";

const NavButton = props => {
  const router = useRouter()
  return (
    <Link href={props.path}>
      <a style={{textDecoration: 'none', color: 'inherit', fontFamily: 'TheBold', fontSize: 26}}>
        { router.pathname === props.path ?
          <div
            style={{ color: "#ED1D24" }}
          >
            <span>{props.label}</span>
          </div> :
          <div
            style={{ color: "#ED1D24" }}
          >
            <span>{props.label}</span>
          </div>
        }
      </a>
    </Link>
  );
};

export default withRouter(NavButton);

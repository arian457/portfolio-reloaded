import Logo from "./Logo";


export default function Nav() {
  return (
    <nav className="row-xl">
      <Logo width="90" height="60" />
      <ul className={`row-m nav-menu`}>
        <li>
          <a href="#foo">foo</a>
        </li>
        <li>
          <a href="#bar">bar</a>
        </li>
        <li>
          <a href="#baz">baz</a>
        </li>
      </ul>
    </nav>
  );
}

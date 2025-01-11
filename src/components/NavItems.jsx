import { getItems } from "@utils/helpers";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcherSelect from "./Switch";

function NavItems({ toggleMenu }) {
  const t = useTranslations("Nav");
  const menuItems = getItems(t, "Nav.items");
  const menuIds = getItems(t, "Nav.ids");

  return (
    <>
      {menuItems.map((item, i) => (
        <li key={menuIds[i]}>
          <Link
            href={`#${menuIds[i]}`}
            onClick={toggleMenu}
            className="block transition-all hover:bg-neutral-100 p-2 xl:p-0 "
          >
            {item}
          </Link>
        </li>
      ))}
      <li>
        <LocaleSwitcherSelect />
      </li>
    </>
  );
}

export default NavItems;

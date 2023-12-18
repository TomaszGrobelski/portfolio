import {navigationList} from "./navigationList";

function Navigation() {
    const navigation = navigationList.map((nav) => {
      return <div>{nav.name}</div>
    });
    return <div className="flex justify-evenly border-b border-black py-2">
      <p>TomaszGrobelski</p>
      <div className="flex gap-2">
        {navigation}
      </div>
      <div></div>
    </div>;
}

export default Navigation;

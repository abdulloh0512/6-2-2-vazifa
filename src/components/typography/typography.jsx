import Typograph from "./typograph";

function Right() {
  return (
    <>
      <div className="typograph2">
        <div>
          <h4>Body M Plus Jakarta Sans Medium 18px 28px Line</h4>
          <h5>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis. Donec nec
            justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
            amet orci. Aenean dignissim pellentesque felis.Donec nec justo eget
            felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
          </h5>
        </div>
        <div>
          <h4>Body S Plus Jakarta Sans Bold 16px 28px Line</h4>
          <h5>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis. Donec nec
            justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
            amet orci. Aenean dignissim pellentesque felis.Donec nec justo eget
            felis facilisis fermentum.
          </h5>
        </div>
      </div>
    </>
  );
}

function Content() {
  return (
    <div className="typograph">
      <Typograph />
      <Right />
    </div>
  );
}

export default Content;

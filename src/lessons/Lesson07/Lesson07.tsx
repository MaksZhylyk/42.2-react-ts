import "./styles.css";
import { BoxInfo } from "./styles";

function Lesson07() {
  //Generic
  type CustomArrayType<T = string> = (T | undefined)[];

  const colors: CustomArrayType = ["red", "blue", undefined];
  const colorCodes: CustomArrayType<number> = [23445, 23434, undefined];

  //enum
  enum Colors {
    Red,
    Black = 10,
    Green,
  }

  let currentColor: Colors = Colors.Green;
  console.log(Colors);

  enum USER_ROLES {
    ADMIN = "Admin",
    USER = "User",
    GUEST = "Guest",
  }

  interface UserData {
    name: string;
    age: number;
    role: USER_ROLES;
  }

  //enum для цветов светофор
  enum TRAFFIC_LIGHT {
    RED = "red",
    YELLOW = "yellow",
    GREEN = "green",
  }

  const getAction = (light: TRAFFIC_LIGHT): string => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return "Cтоп";
      case TRAFFIC_LIGHT.YELLOW:
        return "Приготовьтесь идти";
      case TRAFFIC_LIGHT.GREEN:
        return "Можно идти";
      default:
        return "Неизвестный сигнал";
    }
  };

  console.log(getAction(TRAFFIC_LIGHT.GREEN));

  // ---------------Стилизация компонентов
  //Inline стили
  const textStyles = {
    color: "blue",
    fontSize: "24px",
  };

  return (
    <div className="lesson07-container">
      {/* <div style={{ color: 'green' }}>Inline style example 1</div> */}
      <div style={textStyles}>Inline style example 1</div>
      <p style={textStyles}>Inline style example 2</p>
      <BoxInfo primary>Emotion example</BoxInfo>
      <BoxInfo>Emotion example 2</BoxInfo>
    </div>
  );
}

export default Lesson07;

const projectName = "haido";

interface IRandomName{
  name?: string,
  number?: number
}

const randomName = (props:IRandomName = {name:""}) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  var total = props.number ? props.number : 6
  for (var i = 0; i < total; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `${projectName}_${props?.name as any}_${result}`;
}

export default randomName

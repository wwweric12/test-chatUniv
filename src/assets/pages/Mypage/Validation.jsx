import * as yup from "yup";
export const validation = yup.object().shape({
  password: yup
    .string()
    .required("비밀번호가 8자이상이어야 합니다. ")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,13}$/,
      "비밀번호가 8자이상이어야 합니다. " //추후에  비밀번호 유효성 검사 어떻게 할건지 정해야함
    ),
  checkPassword: yup
    .string()
    .required("비밀번호가 일치하지 않습니다.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});
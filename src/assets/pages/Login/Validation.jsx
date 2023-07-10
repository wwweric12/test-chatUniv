import * as yup from "yup";
export const validation = yup.object().shape({
  email: yup
    .string()
    .required("존재하지 않은 이메일이거나 비밀번호가 일치하지 않습니다.")
    .matches(
      /^[A-Za-z0-9]+([._%+-]*[A-Za-z0-9])*@mju\.ac\.kr$/,
      "존재하지 않은 이메일이거나 비밀번호가 일치하지 않습니다."
    ),
  password: yup
    .string()
    .required("존재하지 않은 이메일이거나 비밀번호가 일치하지 않습니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,13}$/,
      "존재하지 않은 이메일이거나 비밀번호가 일치하지 않습니다."
    ),
});

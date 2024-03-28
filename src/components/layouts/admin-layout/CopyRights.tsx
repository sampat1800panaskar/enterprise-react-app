import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const CopyRights = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        react enterprise -
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

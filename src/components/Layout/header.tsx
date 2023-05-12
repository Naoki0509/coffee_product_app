import { Navlink } from "@/src/components/mol/navlink";
import { Button, createStyles, Group, Header, Text } from "@mantine/core";

export const HeaderModule = () => {
  const styles = createStyles((theme) => ({
    header: {
      padding: "0 20px",
      height: "60px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontWeight: "bold",
      fontSize: "30px",
      [theme.fn.smallerThan("md")]: {
        fontSize: "20px",
      },
    },
    buttonGroup: {
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },
  }));

  const { classes } = styles();

  return (
    <Header height="sm" className={classes.header}>
      <Group>
        <Text className={classes.title}>PostPack Coffee</Text>
        <Navlink />
      </Group>
      <Group className={classes.buttonGroup}>
        <Button color={"dark"} component="a" href="/signup">
          サインイン
        </Button>

        <Button variant="outline" color={"dark"} component="a" href="/login">
          ログイン
        </Button>
      </Group>
    </Header>
  );
};

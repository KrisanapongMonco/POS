import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import Footer from "../components/Footer.components";
import Dashboard from "../pages/Dashboard.pages";
import Order from "../pages/Order.pages";

// Define the navigation items
const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/app/dashboard",
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
    link: "/app/order",
  },
];

// Define the theme for the application
const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Custom router hook for handling navigation
function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

// Main DashboardLayoutBasic component
export default function DashboardLayoutBasic(props: any) {
  const { window } = props;

  const router = useDemoRouter("/app/dashboard");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            {router.pathname === "/app/dashboard" && <Dashboard />}
            {router.pathname === "/app/order" && <Order />}
          </Grid>
        </PageContainer>
        <Footer />
      </DashboardLayout>
    </AppProvider>
  );
}

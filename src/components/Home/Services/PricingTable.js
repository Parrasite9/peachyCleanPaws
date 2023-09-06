import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const PricingList = styled("ul")({
  margin: 0,
  padding: 0,
  listStyle: "none",
});

const tiers = [
{
    title: "Essential Care Package",
    subheader: "Basic Grooming Package",
    price: "100",
    description: [
        // "Housecall charge: $20",
        "Accommodates small, medium, and large dogs",
        "Paw Experience Shampoo/Conditioner included",
        "Nail clipping and grinding included",
        "Ear cleaning and nose/paw balm included",
        ],
        buttonVariant: "outlined",
        buttonText: "Select",
    },
    {
        title: "Better Subscription",
        subheader: "Premium Grooming Package",
        price: "150",
        description: [
        //   "Housecall charge: $20",
          "Accommodates small, medium, and large dogs",
          "Choose from premium shampoos/conditioners",
          "Nail clipping and grinding included",
          "Ear cleaning, nose/paw balm, and teeth brushing included",
        ],
        buttonVariant: "outlined",
        buttonText: "Select",
      },
      {
        title: "Best Subscription",
        subheader: "Ultimate Grooming Package",
        price: "200",
        description: [
        //   "Housecall charge: $15",
          "Accommodates small, medium, and large dogs",
          "All premium shampoos/conditioners included",
          "Comprehensive nail services included",
          "Complete care: ear cleaning, nose/paw balm, teeth brushing, extra brush out, and fresh scent dog spray included",
          "Exclusive access to priority scheduling",
        ],
        buttonVariant: "outlined",
        buttonText: "Select",
      },
];

export default function Pricing() {
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                action={tier.title === "Pro" ? <StarIcon /> : null}
                subheaderTypographyProps={{
                  align: "center",
                  color: "white",
                }}
                // sx={{
                //   backgroundColor: (theme) =>
                //     theme.palette.mode === "light"
                //       ? theme.palette.grey[200]
                //       : theme.palette.grey[700],
                // }}
                sx={{
                    backgroundColor: "#1290CB",
                    color: "white"
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                    color: "white",
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    ${tier.price}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    /mo
                  </Typography>
                </Box>
                <PricingList>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </PricingList>
              </CardContent>
              <CardActions>
                <Button fullWidth variant={tier.buttonVariant}>
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
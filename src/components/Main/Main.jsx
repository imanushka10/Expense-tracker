import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core"
import useStyles from "./styles"
import Form from "./Form/Form"

const Main = () => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="POwered by speechly"></CardHeader>
            <CardContent>
                <Typography align="center" variant="h5">
                    Total Balance $100
                </Typography>
                <Typography variant="subtitle1" style={{ lineHeight: "1.5rem", marginTop: "20px" }} >
                    {/* infocard container */}

                    Try saving: Add income for $100 in category salary for Monday.....
                </Typography>
                <Divider></Divider>
                <Form />
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* List */}

                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}

export default Main

import { Grid } from "@mui/material"

const Grd = () => {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <p>This is the content for the left column.</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <p>This is the content for the right column.</p>
                </Grid>
            </Grid>
        </>
    )

}

export default Grd
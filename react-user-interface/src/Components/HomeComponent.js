import { Box, Button, Input, Switch, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DataService from '../Service/DataService';





const HomeComponent = () => {

    const [data, setData] = useState("");

    const logIn = (e) => {

        DataService.getData().then(
            (response) => {
                console.log(response);
            },
            (error) => {

            }
        )

    }


    return (
        <div>

            <Box className="d-flex justify-content-center">
                <Box>
                    <Typography sx={{ fontSize: 40 }}>Measuring and sorting system</Typography>
                </Box>
            </Box>

            <Box class="container">
                <Box class="row justify-content-start">
                    <Box class="col-4">
                        <span>Automatic / Manual</span>
                        <Switch />
                    </Box>
                    <Box class="col-4">
                        <Button variant="contained" onClick={(e) => logIn(e)}>
                            <span>Start conveyor</span>
                        </Button>
                    </Box>
                    <Box class="col-4">
                        <Button variant="contained" onClick={(e) => logIn(e)}>
                            <span>Stop conveyor</span>
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box class="container">
                <Box class="row justify-content-start">
                    <Box class="col-4">
                        <Typography sx={{ fontSize: 20 }}>24V OK</Typography>
                    </Box>
                    <Box class="col-4">
                        <Typography sx={{ fontSize: 20 }}>Item in the system</Typography>
                    </Box>
                </Box>
            </Box>

            <Box class="container">
                <Box class="row justify-content-start">
                    <Box class="col-4">
                        <Input></Input>
                    </Box>
                    <Box class="col-4">
                        <Typography sx={{ fontSize: 20 }}>Item in the system</Typography>
                    </Box>
                </Box>
            </Box>





            <div className="d-flex justify-content-center">
                <Button variant="contained" onClick={(e) => logIn(e)}>
                    <span>Send</span>
                </Button>
            </div>


        </div>
    );
}

export default HomeComponent;
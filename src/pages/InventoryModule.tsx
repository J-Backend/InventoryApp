import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react";
import { InventoryPanel } from "./InventoryPanel";
import { TransactionPanel } from "./TransactionPanel";
import { CustomTabPanel } from "../components/CustomTabPanel";


const tabTitles = [
    "Inventario",
    "Transacciones"
]

export const InventoryModule = () => {
    const [value, setValue] = useState(0);

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={(_, newValue) => setValue(newValue)} aria-label="basic tabs example" centered>
                    {
                        tabTitles.map((title, i) => (
                            <Tab key={i} label={title} {...a11yProps(i)} />
                        ))
                    }
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <InventoryPanel />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TransactionPanel />
            </CustomTabPanel>

        </>
    )
}


import Typography from '@mui/material/Typography';

interface Info {
    apellidos: string;
    nombres: string;
    paralelo: string;
}

export default function Student(info: Info) {
    return (
        <>
            <Typography component="p" variant="h4" sx={{ fontWeight: 'bold' }}>
                {info.apellidos} {info.nombres}
            </Typography>
            
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                Paralelo # {info.paralelo}
            </Typography>
        </>
    )
}

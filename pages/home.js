import { Divider, Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default function home() {
  return (
    <Typography>
      <Title>Welcome my star</Title>
      <Paragraph>
        gogogogogogo
      </Paragraph>

      <Text strong>
        hahahahahaha
      </Text>
    </Typography>
  );
}

export async function getServerSideProps(ctx){
  return {
    props:{
      data:null
    }
  }
}

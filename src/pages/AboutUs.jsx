import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Our mission is to document and share UFO sightings from around the world. Our team is dedicated to uncovering the truth behind these mysterious events.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
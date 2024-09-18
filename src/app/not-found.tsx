import { Card, CardBody } from "@nextui-org/react";
import { OctagonX } from "lucide-react";

export default function NotFound() {
  return (
    <Card className="mx-auto max-w-md">
      <CardBody className="text-center">
        <p className="test-2xl inline-flex items-center justify-center gap-2">
          <OctagonX /> | This page can not be found
        </p>
      </CardBody>
    </Card>
  );
}

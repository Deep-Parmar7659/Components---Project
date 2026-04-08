import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";

function BreadcrumbDemo() {
  return (
    // Minimal padding
    <div className="p-2">
      <Breadcrumb>
        <BreadcrumbItem>🏠 Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbDemo;

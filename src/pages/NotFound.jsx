import Container from "../components/Container";

export default function NotFound() {
  return (
    <div className="h-screen">
      <Container>
        <div className="flex flex-col items-center justify-center  text-zinc-900 dark:text-stone-200 h-1/2">
          <h1>Oops! You seem to be lost.</h1>
          <p className="text-9xl">404</p>
          <p>Page not found</p>
        </div>
      </Container>
    </div>
  );
}

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <Container>
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Jassim Bashir. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/jassimbashir01" className="hover:text-gray-800">
              GitHub
            </a>
            <a href="https://linkedin.com/in/jassimbashir" className="hover:text-gray-800">
              LinkedIn
            </a>
            <a href="mailto:mohammadjassimbashir@proton.me" className="hover:text-gray-800">
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function Footer() {
  const yearNow = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container-xxxl d-flex justify-content-center pt-4 pb-2 text-center">
        <p>© {yearNow} WhatMovie. All rights reserved</p>
      </div>
    </div>
  );
}

function Header() {
    const element = (
        <div class="bg-primary-subtle mb-5 p-5">
        <div class="row align-items-center px-3">
          <div class="col-lg-6 text-center text-lg-left">
            <h4 class="text-primary m-3">대학연합 코딩교육봉사 동아리</h4>
            <h1 class="text-primary m-3">대딩코딩</h1>
            <a href="/about" class="btn btn-outline-primary mt-1 py-3 px-5">Learn More</a>
          </div>
          <div class="col-lg-6 text-center text-lg-right">
            <img class="img-fluid mt-5" src="/images/header.png" alt="" />
          </div>
        </div>
      </div>
    );

    return (element);
}

export default Header;
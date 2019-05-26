using System.Web.Mvc;

namespace TheExchange.API.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "The Exchange";

            return View();
        }
    }
}

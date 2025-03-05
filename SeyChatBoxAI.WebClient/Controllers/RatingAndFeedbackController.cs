using Microsoft.AspNetCore.Mvc;

namespace SeyChatBoxAI.WebClient.Controllers
{
    [Route("/rating-feedback")]
    public class RatingAndFeedbackController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

using System.Web;
using System.Web.Optimization;

namespace Web {
	public class BundleConfig {
		// For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
		public static void RegisterBundles(BundleCollection bundles) {
			bundles.UseCdn = true;
			
			bundles.Add(new ScriptBundle("~/bundles/jquery", "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js").Include(
				"~/js/lib/jquery-{version}.js"));

			bundles.Add(new ScriptBundle("~/bundles/auth").Include(
				"~/js/auth/externalAuth.js"));

			//bundles.Add(new ScriptBundle("~/bundles/todo").Include(
			//	"~/Scripts/app/todo.bindings.js",
			//	"~/Scripts/app/todo.datacontext.js",
			//	"~/Scripts/app/todo.model.js",
			//	"~/Scripts/app/todo.viewmodel.js"));

		}
	}
}
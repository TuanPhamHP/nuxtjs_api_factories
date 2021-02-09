import repository from "@/api/apiRepository";

export default function(ctx, inject) {
  const api = repository(ctx.$axios);
  inject("api", api);
}

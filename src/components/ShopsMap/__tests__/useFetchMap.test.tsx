import { applyShopFilter, initialState, reducer } from "../useFetchMap";
import { Locale } from "@/server/generated/graphql";
import { renderHook } from "@testing-library/react-hooks";
import { shopsData } from "@/components/ShopsMap/__mocks__/shops.mocks";

describe("useFetchMap", () => {
  it("should applyShopFilter to initialState", () => {
    expect(applyShopFilter(initialState)).toEqual([]);
  });
  it("should applyShopFilter to shops", () => {
    expect(
      applyShopFilter({ ...initialState, data: shopsData.data })
    ).toHaveLength(500);
  });
  it("should applyShopFilter to shops filtered by category", () => {
    expect(
      applyShopFilter({
        ...initialState,
        data: shopsData.data,
        filters: {
          ...initialState.filters,
          category: "Süßwaren, Nüsse, Trockenfrüchte",
        },
      })
    ).toHaveLength(57);
  });
  it("should applyShopFilter to shops filtered by type", () => {
    expect(
      applyShopFilter({
        ...initialState,
        data: shopsData.data,
        filters: {
          ...initialState.filters,
          type: "Eis",
        },
      })
    ).toHaveLength(2);
  });
  it("should applyShopFilter to shops filtered by state", () => {
    expect(
      applyShopFilter({
        ...initialState,
        data: shopsData.data,
        filters: {
          ...initialState.filters,
          state: "Bayern",
        },
      })
    ).toHaveLength(6);
  });

  it("should applyShopFilter to shops filtered by search", () => {
    expect(
      applyShopFilter({
        ...initialState,
        data: shopsData.data,
        filters: {
          ...initialState.filters,
          search: "München",
        },
      })
    ).toHaveLength(80);
  });

  it("should reduce SET_CATEGORY SET_STATE", () => {
    let stateUpdate = reducer(
      {
        ...initialState,
        data: shopsData.data,
      },
      { type: "SET_CATEGORY", payload: "Süßwaren, Nüsse, Trockenfrüchte" }
    );
    expect(stateUpdate.filters).toEqual({
      category: "Süßwaren, Nüsse, Trockenfrüchte",
      center: [51.1657, 10.2336],
      search: null,
      state: null,
      type: null,
      zoom: 6,
    });
    expect(stateUpdate.shops).toBeNull();
    stateUpdate = reducer(stateUpdate, { type: "APPLY_FILTERS" });

    expect(stateUpdate.shops).toHaveLength(57);
    stateUpdate = reducer(stateUpdate, {
      type: "SET_STATE",
      payload: { name: "Bayern" } as any,
    });
    expect(stateUpdate.shops).toBeNull();
    stateUpdate = reducer(stateUpdate, { type: "APPLY_FILTERS" });
    expect(stateUpdate.shops).toHaveLength(4);

    expect(stateUpdate.filters).toEqual({
      category: "Süßwaren, Nüsse, Trockenfrüchte",
      center: [0, 0],
      search: null,
      state: "Bayern",
      type: null,
      zoom: 6,
    });
    stateUpdate = reducer(stateUpdate, {
      type: "SET_STATE",
      payload: { name: "Bayern" } as any,
    });
    expect(stateUpdate.shops).toBeNull();

    stateUpdate = reducer(stateUpdate, { type: "APPLY_FILTERS" });
    expect(stateUpdate.shops).toHaveLength(57);
    expect(stateUpdate.filters).toEqual({
      category: "Süßwaren, Nüsse, Trockenfrüchte",
      center: [0, 0],
      search: null,
      state: null,
      type: null,
      zoom: 6,
    });

    stateUpdate = reducer(
      {
        ...stateUpdate,
        data: shopsData.data,
      },
      { type: "SET_CATEGORY", payload: "Süßwaren, Nüsse, Trockenfrüchte" }
    );
    expect(stateUpdate.shops).toBeNull();
    stateUpdate = reducer(stateUpdate, { type: "APPLY_FILTERS" });
    expect(stateUpdate.shops).toHaveLength(500);
    expect(stateUpdate.filters).toEqual({
      category: null,
      center: [0, 0],
      search: null,
      state: null,
      type: null,
      zoom: 6,
    });
  });

  it("should reduce SET_SEARCH SET_TYPE", () => {
    let stateUpdate = reducer(
      {
        ...initialState,
        data: shopsData.data,
      },
      { type: "SET_TYPE", payload: "Eis" }
    );
    expect(stateUpdate.filters).toEqual({
      category: null,
      center: [51.1657, 10.2336],
      search: null,
      state: null,
      type: "Eis",
      zoom: 6,
    });
    expect(stateUpdate.shops).toBeNull();
    stateUpdate = reducer(stateUpdate, { type: "APPLY_FILTERS" });

    expect(stateUpdate.shops).toHaveLength(2);
    stateUpdate = reducer(stateUpdate, {
      type: "SET_SEARCH",
      payload: "Tölzer",
    });
    expect(stateUpdate.shops).toBeNull();
    stateUpdate = reducer(stateUpdate, { type: "APPLY_FILTERS" });
    expect(stateUpdate.shops).toHaveLength(1);

    expect(stateUpdate.filters).toEqual({
      category: null,
      center: [51.1657, 10.2336],
      search: "Tölzer",
      state: null,
      type: "Eis",
      zoom: 6,
    });

    stateUpdate = reducer(stateUpdate, {
      type: "SET_TYPE",
      payload: "Eis",
    });
    expect(stateUpdate.shops).toBeNull();
    stateUpdate = reducer(stateUpdate, { type: "APPLY_FILTERS" });
    expect(stateUpdate.shops).toHaveLength(3);
    stateUpdate = reducer(
      {
        ...stateUpdate,
        data: shopsData.data,
      },
      { type: "SET_SEARCH", payload: "Tölzer" }
    );
    expect(stateUpdate.shops).toBeNull();
    stateUpdate = reducer(stateUpdate, { type: "APPLY_FILTERS" });
    expect(stateUpdate.shops).toHaveLength(500);

    expect(stateUpdate.filters).toEqual({
      category: null,
      center: [51.1657, 10.2336],
      search: null,
      state: null,
      type: null,
      zoom: 6,
    });
  });
});

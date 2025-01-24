#[starknet::interface]
trait IArcadeGame<TContractState> {
    fn getGameId(self: @TContractState) -> u128;
    fn getAdmin(self: @TContractState) -> ContractAddress;
    fn setGameName(ref self: TContractState, game_name: felt252);
    fn getGameName(self: @TContractState) -> felt252;
    fn setGameDescription(ref self: TContractState, description: felt252);
    fn getGameDescription(self: @TContractState) -> felt252;
    fn increasePlayCount(ref self: TContractState);
    fn getPlayCount(self: @TContractState) -> u32;
    fn setWinningAmount(ref self: TContractState, amount: u64);
    fn getWinningAmount(self: @TContractState) -> u64;
    fn placeBet(ref self: TContractState, bet_amount: u64);
    fn getCurrentBalance(self: @TContractState) -> u64;
    fn setIsActive(ref self: TContractState, is_active: bool);
    fn getIsActive(self: @TContractState) -> bool;
}

#[starknet::contract]
mod ArcadeGame {
    use starknet::ContractAddress;

    #[storage]
    struct Storage {
        game_id: u128,
        admin: ContractAddress,
        game_name: felt252,
        description: felt252,
        play_count: u32,
        winning_amount: u64,
        current_balance: u64,
        is_active: bool,
    }

    #[constructor]
    fn constructor(
        ref self: ContractState, 
        game_id: u128, 
        admin: ContractAddress, 
        game_name: felt252, 
        description: felt252, 
        winning_amount: u64
    ) {
        self.game_id.write(game_id);
        self.admin.write(admin);
        self.game_name.write(game_name);
        self.description.write(description);
        self.play_count.write(0);
        self.winning_amount.write(winning_amount);
        self.current_balance.write(0);
        self.is_active.write(true);
    }

    #[abi(embed_v0)]
    impl ArcadeGameImpl of super::IArcadeGame<ContractState> {
        fn getGameId(self: @ContractState) -> u128 {
            return self.game_id.read();
        }
        fn getAdmin(self: @ContractState) -> ContractAddress {
            return self.admin.read();
        }
        fn setGameName(ref self: ContractState, game_name: felt252) {
            self.game_name.write(game_name);
        }
        fn getGameName(self: @ContractState) -> felt252 {
            return self.game_name.read();
        }
        fn setGameDescription(ref self: ContractState, description: felt252) {
            self.description.write(description);
        }
        fn getGameDescription(self: @ContractState) -> felt252 {
            return self.description.read();
        }
        fn increasePlayCount(ref self: ContractState) {
            self.play_count.write(self.play_count.read() + 1);
        }
        fn getPlayCount(self: @ContractState) -> u32 {
            return self.play_count.read();
        }
        fn setWinningAmount(ref self: ContractState, amount: u64) {
            self.winning_amount.write(amount);
        }
        fn getWinningAmount(self: @ContractState) -> u64 {
            return self.winning_amount.read();
        }
        fn placeBet(ref self: ContractState, bet_amount: u64) {
            self.current_balance.write(self.current_balance.read() + bet_amount);
        }
        fn getCurrentBalance(self: @ContractState) -> u64 {
            return self.current_balance.read();
        }
        fn setIsActive(ref self: ContractState, is_active: bool) {
            self.is_active.write(is_active);
        }
        fn getIsActive(self: @ContractState) -> bool {
            return self.is_active.read();
        }
    }
}
